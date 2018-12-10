import React from 'react'

import './Footer.scss'
import { Button } from 'semantic-ui-react'

export default () => 
    (
        <div className="footer">
            <div className='socialMediaIconGroup'>
                <Button circular color='facebook' icon='facebook' />
                <Button circular color='twitter' icon='twitter' />
                <Button circular color='linkedin' icon='linkedin' />
                <Button circular color='google plus' icon='google plus' />
            </div>
        </div>
    )
