import { ButtonProps } from '@/interfaces'
import React from 'react'

const Button: React.FC<ButtonProps> = ({ title, sizes = "medium", shapes = "rounded-md", styles = "" }) => {

    const sizeClasses = {
        "small": 'px-2 py-1 text-sm',
        "medium": 'px-4 py-2 text-base',
        "large": 'px-6 py-3 text-lg'
    };

    const shapeClasses = {
        'rounded-sm': 'rounded-sm',
        'rounded-md': 'rounded-md',
        'rounded-full': 'rounded-full'
    };

    return (
        <button
            className={`bg-blue-500 text-white hover:bg-blue-600 transition-colors ${sizeClasses[sizes]} ${shapeClasses[shapes]} ${styles}`}
        >
            {title}
        </button>
    )
}

export default Button
