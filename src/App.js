import { useEffect, useState } from 'react';
import { Modal } from './lib/Modal';
import './App.css';

function App() {
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        document.title = 'React modal';
    });
    var modalContent = (
        <p>
            Thanks for clicking. That felt good.
            <br />
            Click{' '}
            <a
                href=''
                onClick={() => {
                    setOpenModal(false);
                }}
            >
                close
            </a>
            , click the overlay, or press ESC
        </p>
    );

    return (
        <>
            <div className='band'>
                <div className='wrapper'>
                    <h2 id='example-1'>
                        <a href='#example-1'>#</a> Example 1: Open &amp; Close
                        with links
                    </h2>
                    <ol>
                        <li>Embed modal HTML in document</li>
                        <li>
                            Create a link with <code>rel="modal:open"</code> and
                            set the <code>href</code> attribute to the modal's
                            DOM id.
                        </li>
                    </ol>
                    <pre>
                        <code>
                            &lt;!-- Modal HTML embedded directly into document
                            --&gt; &lt;div id=&quot;ex1&quot;
                            class=&quot;modal&quot;&gt; &lt;p&gt;Thanks for
                            clicking. That felt good.&lt;/p&gt; &lt;a
                            href=&quot;#&quot;
                            rel=&quot;modal:close&quot;&gt;Close&lt;/a&gt;
                            &lt;/div&gt; &lt;!-- Link to open the modal --&gt;
                            &lt;p&gt;&lt;a href=&quot;#ex1&quot;
                            rel=&quot;modal:open&quot;&gt;Open
                            Modal&lt;/a&gt;&lt;/p&gt;
                        </code>
                    </pre>

                    <button
                        className='openModalBtn'
                        onClick={() => {
                            setOpenModal(true);
                        }}
                    >
                        Open Modal
                    </button>

                    {openModal && (
                        <Modal
                            closeModal={setOpenModal}
                            // modalHeader={'Header'}
                            colorHeader='white'
                            bgColorHeader='-webkit-gradient(linear, left bottom, left top, color-stop(0, #1e3d47),color-stop(1, #2e5764))'
                            textAlignHeader='left'
                            fontSizeHeader='14px'
                            modalBody={modalContent}
                            // modalFooter={'Footer'}
                            width='500px'
                            height='200px'
                        ></Modal>
                    )}

                    {/* <a class='btn' href='#ex1' rel='modal:open'>
                        Open Modal
                    </a>

                    <div class='modal' id='ex1'>
                        <p>
                            Thanks for clicking. That felt good. <br />
                            Click{' '}
                            <a href='#' rel='modal:close'>
                                close
                            </a>
                            , click the overlay, or press ESC
                        </p>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default App;
