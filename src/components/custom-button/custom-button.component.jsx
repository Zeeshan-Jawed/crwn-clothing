import React from 'react';
import './custom-button.style.scss';

const CustomButton =({children,isGoogleSignin,...otherprops})=>(
    <button className={`${isGoogleSignin?'googlesignin':''} custom-button`} {...otherprops}>
            {children}
    </button>
)
export default CustomButton