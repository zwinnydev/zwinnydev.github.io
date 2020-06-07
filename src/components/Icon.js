import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({icon}) => icon && icon.includes('gosIcon')
? <><img src="https://www.graosens.org.pl/wp-content/uploads/images/small_icon.png" alt="Fundacja Gra o Sens" style={{height: "24px"}}/>&nbsp;</>
: <><FontAwesomeIcon icon={icon} />&nbsp;</>;

export default Icon;