
import { RegisterForm } from "./ui/Register";


export default function new_account() {
  return (
      <div className="flex flex-col min-h-screen pt-32 sm:pt-52">

        <h1 className={ ` text-4xl mb-5` }>Nueva cuenta</h1>

        <RegisterForm/>
      </div>
    
  );
}
