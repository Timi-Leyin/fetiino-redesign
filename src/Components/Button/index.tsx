import {ReactNode} from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children?: ReactNode,
    className?:any,
}

const Button: React.FunctionComponent<ButtonProps> = ({children, ...rest}) => {
  return (
    <button  {...rest} className={`p-4 w-[150px] bg-transparent text-inherit transition-all text-xs ring-none hover:opacity-90 focus:scale-95 ${rest.className}`}>
        {children}
    </button>
  )
}

export default Button