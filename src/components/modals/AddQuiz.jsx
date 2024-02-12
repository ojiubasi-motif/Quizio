import React, { useContext, useState } from "react";
import { QuizContext } from "../../contexts/QuizContext";
import {
  Modal,
  Form,
  Input,
  ButtonToolbar,
  Checkbox,
  Button,
  Uploader,
  Placeholder,
  InputNumber,
  Message,
  Loader,
  useToaster,
} from "rsuite";
import CameraRetroIcon from "@rsuite/icons/legacy/CameraRetro";
import "../../assets/styles/miscStyles.css";
const Textarea = React.forwardRef((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));

function previewFile(file, callback) {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}

const AddQuiz = () => {
  const { openModal, setOpenModal } = useContext(QuizContext);
  const [addQiuzTime, setAddTime] = useState(false);
  // ===img-upload states======
  const toaster = useToaster();
  const [uploading, setUploading] = useState(false);
  const [fileInfo, setFileInfo] = useState(null);

  // console.log("the modal toggle state=>", openModal);
  const handleClose = () => {
    setOpenModal((prev) => {
      return { ...prev, open: false, modal: null, data: null };
    });
  };
  const handleChange = (e) => {
    // console.log("event=>",e)
    const { name, type, checked } = e?.target;
    type === "checkbox" && name === "duration" && checked
      ? setAddTime(true)
      : type === "checkbox" && name === "duration" && !checked
      ? setAddTime(false)
      : null;
  };

  // console.log("add duration", addQiuzTime);
  return (
    <Modal
      overflow={true}
      open={openModal?.open && openModal?.modal === "Create Quiz"}
      onClose={handleClose}
    >
      <Modal.Header>
        <Modal.Title className="font-bold text-xl flex justify-center">
          Create Quiz
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <Placeholder.Paragraph rows={80} /> */}
        <Form fluid>
          <Form.Group controlId="name-6">
            <Form.ControlLabel className="font-bold">Title</Form.ControlLabel>
            <Form.Control name="name" placeholder="Continous assessment 1" />
            <Form.HelpText>Required</Form.HelpText>
          </Form.Group>

          <span className="w-[90%] flex items-center">
            <Form.Group className="basis-3/6" controlId="textarea-6">
              <Form.ControlLabel className="font-bold">
                Description [optional]
              </Form.ControlLabel>
              <Form.Control
                name="textarea"
                Placeholder={"the first assessment for this term"}
                rows={5}
                accepter={Textarea}
              />
            </Form.Group>
            <Form.Group className="ml-12 self-start flex flex-col">
              <label className="font-bold">Cover image [optional]</label>
              <Uploader
                fileListVisible={false}
                listType="picture"
                action="//jsonplaceholder.typicode.com/posts/"
                onUpload={(file) => {
                  setUploading(true);
                  previewFile(file.blobFile, (value) => {
                    setFileInfo(value);
                  });
                }}
                onSuccess={(response, file) => {
                  setUploading(false);
                  toaster.push(
                    <Message type="success">Uploaded successfully</Message>
                  );
                  console.log(response);
                }}
                onError={() => {
                  setFileInfo(null);
                  setUploading(false);
                  toaster.push(<Message type="error">Upload failed</Message>);
                }}
              >
                <button style={{ width: 150, height: 150 }}>
                  {uploading && <Loader backdrop center />}
                  {fileInfo ? (
                    <img src={fileInfo} width="100%" height="100%" />
                  ) : (
                    <CameraRetroIcon style={{ fontSize: 80 }} />
                  )}
                </button>
              </Uploader>
            </Form.Group>
          </span>
          
          <span className="w-[90%] min-h-24 flex items-center">
            <Form.Group className="flex flex-start items-center">
              <input
                className="checkbox"
                type="checkbox"
                name="duration"
                onChange={handleChange}
                id="provide_explanation"
              />
              <Form.ControlLabel
                className="checkbox__label"
                htmlFor="provide_explanation"
              >
                <span className="checked_text font-bold ml-1">
                  Set Quiz Duration [optional]
                </span>
              </Form.ControlLabel>
            </Form.Group>

            {addQiuzTime ? (
              <Form.Group className="ml-12 w-[150px]">
                <Form.ControlLabel className="font-bold">
                  Quiz Duration(minutes)
                </Form.ControlLabel>
                <InputNumber className="w-[50px]" postfix="min" />
              </Form.Group>
            ) : null}
          </span>
          {/* ========action btns====== */}
          <Form.Group>
            <ButtonToolbar>
              <Button className="bg-b" appearance="primary">
                Submit
              </Button>
              <Button appearance="default">Cancel</Button>
            </ButtonToolbar>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={handleClose} appearance="primary">
          Ok
        </Button>
        <Button onClick={handleClose} appearance="subtle">
          Cancel
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default AddQuiz;
