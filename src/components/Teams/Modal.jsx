import React from 'react'

function Modal({ id, details, name }) {

    return (

        <div class="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fw-bold" id="exampleModalLabel"> {name} </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p className="fw-light fs-sm">
                            {details}
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Modal