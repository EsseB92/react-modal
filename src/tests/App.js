import { useEffect, useState } from "react";
import { Modal } from "./lib/Modal";
import XMark from "./assets/pngs/circle-xmark.png";
//import Exclamation from "./assets/svgs/solid/exclamation.svg";
import "./App.css";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [nbrModal, setNbrModal] = useState(1);

  useEffect(() => {
    document.title = "React modal";
  });

  const modalConfigurations = {
    // First Modal
    1: {
      // Global Part
      closeModal: setOpenModal,
      maxWidth: "500px",
      closingBtn: XMark,
      borderRadius: "8px",
      padding: "15px 30px",
      fontFamily: '"Lato", "Helvetica Neue", arial, sans-serif',
      // Body Part
      modalBody: (
        <p>
          Thanks for clicking. That felt good. <br />
          Click{" "}
          <a
            href="#"
            onClick={() => {
              setOpenModal(false);
            }}
            className="clickable"
          >
            close
          </a>
          , click the overlay, or press ESC
        </p>
      ),
      colorBody: "#5e6c76",
      bgColorBody: "white",
      textAlignBody: "left",
      fontSizeBody: "18px",
      paddingBody: "0",
    },
    // Second Modal
    2: {
      // Global Part
      closeModal: setOpenModal,
      maxWidth: "500px",
      closingBtn: XMark,
      // borderRadius: '8px',
      // padding: '15px 30px',
      fontFamily: '"Lucida Grande", Verdana, sans-serif',
      // Header Part

      modalHeader: "Please login to continue",
      colorHeader: "white",
      bgColorHeader:
        "-webkit-gradient(linear,left bottom,left top,color-stop(0, #1e3d47),color-stop(1, #2e5764))",
      fontSizeHeader: "14px",
      paddingHeader: "10px",
      marginHeader: "0",
      // Body Part
      modalBody: (
        <form
          action
          className="login_form"
          id="ex2"
          style={{ display: "inline-block" }}
        >
          <p>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />
          </p>
          <p>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </p>
          <p>
            <input type="submit" value="login" />
          </p>
        </form>
      ),
      colorBody: "#5e6c76",
      bgColorBody: "white",
      textAlignBody: "left",
      fontSizeBody: "18px",
    },
    3: {
      // Global Part
      closeModal: setOpenModal,
      maxWidth: "500px",
      closingBtn: XMark,
      borderRadius: "8px",
      padding: "15px 30px",
      fontFamily: '"Lato", "Helvetica Neue", arial, sans-serif',
      // Header Part

      modalHeader: "Please login to continue",
      colorHeader: "white",
      bgColorHeader:
        "-webkit-gradient(linear,left bottom,left top,color-stop(0, #1e3d47),color-stop(1, #2e5764))",
      fontSizeHeader: "14px",
      paddingHeader: "10px",
      marginHeader: "0",
      // Body Part
      modalBody: (
        <>
          <p id="more">aaaaa</p>
          <p>bbbbb</p>
        </>
      ),
      colorBody: "#5e6c76",
      bgColorBody: "white",
      textAlignBody: "left",
      fontSizeBody: "18px",
    },
  };

  return (
    <>
      <div className="band">
        <div className="wrapper">
          <h2 id="example-1">
            <a href="#example-1">#</a> Example 1: Open &amp; Close with links
          </h2>

          <button
            className="openModalBtn"
            onClick={() => {
              setOpenModal(true);
              setNbrModal(1);
            }}
          >
            Open Modal
          </button>

          <h2 id="example-2">
            <a href="#example-2">#</a> Example 2: styled login form &amp; events
            with links
          </h2>

          <button
            className="openModalBtn"
            onClick={() => {
              setOpenModal(true);
              setNbrModal(2);
            }}
          >
            Open Modal
          </button>

          <h2 id="example-3">
            <a href="#example-3">#</a> Example 3: adjusting to content
          </h2>

          <button
            className="openModalBtn"
            onClick={() => {
              setOpenModal(true);
              setNbrModal(3);
            }}
          >
            Open Modal
          </button>

          {openModal && <Modal {...modalConfigurations[nbrModal]} />}

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

// var modalContent = (
//     <p>
//         Vous êtes désormais connecté. Il vous reste une dernière étape.
//         <br />
//         Cliquez{' '}
//         <a
//             href=''
//             onClick={() => {
//                 setOpenModal(false);
//             }}
//         >
//             Ici
//         </a>{' '}
//         pour accéder au site ou quittez cette page
//     </p>
// );

//     // Global Part
//     closeModal={setOpenModal}
//     maxWidth='500px'
//     closingBtn={XMark}
//     borderRadius='25px'
//     // height='200px'
//     // Header Part
//     modalHeader={'Vous êtes connecté'}
//     colorHeader='white'
//     bgColorHeader='-webkit-gradient(linear, left bottom, left top, color-stop(0, #1e3d47),color-stop(1, #2e5764))'
//     textAlignHeader='center'
//     fontSizeHeader='20px'
//     // Body Part
//     modalBody={modalContent}
//     colorBody='white'
//     bgColorBody='grey'
//     textAlignBody='left'
//     fontSizeBody='14px'
//     modalFooter={'Footer'}
// ></>

// <Modal
//     // Global Part
//     closeModal={setOpenModal}
//     maxWidth='500px'
//     closingBtn={XMark}
//     borderRadius='8px'
//     // height='200px'
//     // Header Part
//     //modalHeader={'Vous êtes connecté'}
//     //colorHeader='white'
//     //bgColorHeader='-webkit-gradient(linear, left bottom, left top, color-stop(0, #1e3d47),color-stop(1, #2e5764))'
//     //textAlignHeader='center'
//     //fontSizeHeader='20px'
//     // Body Part
//     modalBody={modalContent}
//     colorBody='#5e6c76'
//     bgColorBody='white'
//     textAlignBody='left'
//     fontSizeBody='14px'
//     // Footer Part
//     modalFooter={'Footer'}
// ></Modal>
