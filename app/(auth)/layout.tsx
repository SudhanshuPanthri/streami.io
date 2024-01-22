import { Logo } from "./_components/logo";

const AuthLayout=({children}:{children:React.ReactNode})=>{
    return(
        <div className="flex flex-col space-y-6 h-full justify-center items-center">
            <Logo />
            {children}
        </div>
    )
}

export default AuthLayout;