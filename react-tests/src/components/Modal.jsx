import React from 'react'

export default function Modal({id, header, body, footer, onCloseModal}) {
  return (
    <div id={id || 'modal'} className="modal">
        <div className="modal-content">
            <div className="header">
                <span onClick={onCloseModal} className='close-modal-icon'>&times;</span>
                <h2>{header ? header : 'Header'}</h2>
            </div>
                <div className="body">{body ? body : <div>This is our nodal body</div> }</div>
                    <div className="footer">{footer ? footer : <p>Footer</p>}</div>
        </div>
    </div>
  )
}
