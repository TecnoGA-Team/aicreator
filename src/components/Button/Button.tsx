import React from 'react'

interface ButtonProps{
    name: string;
    icon?: React.ReactNode;
    background?: string;
    color?: string;
    border?: string;
}
function Button({name,icon,background='var(--color-bg)',color,border}:ButtonProps) {
  return (
    <div className='buttonS'>
        
        <style jsx>{`
        .buttonS{ 
            background:${background};
            color:${color};
            border:${border};
            padding:0.8rem 2rem;
            border-radius:30px;
            border:2px solid var(--color-border);
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            display: flex;
            align-items: center;
            gap: 1rem; 
            &:hover{
                background-color: var(--color-border);
                color: white;
            }  
        }
        `}</style>
        {icon && icon}
        {name}
    </div>
  )
}

export default Button