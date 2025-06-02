'use client';

import { paypalCheckPayment, setTransactionId } from '@/actions';
import { CreateOrderData, CreateOrderActions, OnApproveData, OnApproveActions, } from '@paypal/paypal-js';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

interface Props {
    orderId: string;
    amount: number;
}

export const PayPalButton = ({ orderId, amount }: Props) => {

    const [{ isPending }] = usePayPalScriptReducer();

    const rountedAmount = (Math.round(amount * 100)) / 100; //123.23


    if ( isPending ) {
        return (
        <div className="animate-pulse mb-16">
            <div className="h-12 bg-gray-300 rounded" />
            <div className="h-12 bg-gray-300 rounded mt-3" />
        </div>
        )
    }

    const createOrder = async (data: CreateOrderData, actions: CreateOrderActions): Promise<string> => {
        const transactionId = await actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
                {
                    amount: {
                        currency_code: 'USD', // ← Obligatorio aquí
                        value: `${rountedAmount}`,
                    },
                },
            ],
        });

        // guardar el ID en la base de datos 

        const { ok } = await setTransactionId( orderId, transactionId );
            if ( !ok ) {
            throw new Error('No se pudo actualizar la orden');
        }

        console.log({ transactionId });
        return transactionId;
    };


    const onApprove = async(data: OnApproveData, actions: OnApproveActions) => {
    console.log('onApprove')
        const details = await actions.order?.capture();
        if (!details || !details.id) return;

        await paypalCheckPayment( details.id );

    }

    return (
        <PayPalButtons
            createOrder={ createOrder }
            onApprove={ onApprove }
        />
    )
}