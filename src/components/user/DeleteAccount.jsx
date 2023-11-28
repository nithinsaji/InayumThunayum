import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import UserService from "../../services/user.service";
import Back from "../UI/Back";
import Button, { Delete } from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import { ParagraphText } from "../UI/Text";

const DeleteAccount = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    delete: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [del, setDel] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    if(values.delete !== 'DELETE') return;
    setLoading(true);
    try {
      await UserService.deleteAccountAPI(values.email, values.password).then(
        (response) => {
          response.status === "success"
            ? toast.success(response.message)
            : toast.error(response.message);
          setValues({
            email: "",
            password: "",
            delete:""
          });
          setLoading(false);
          if (response.status === "success") {
            localStorage.clear();
            navigate("/", { replace: true });
          }
        }
      );
    } catch (err) {}
  };

  return (
    <div>
      {showModal && (
        <Modal>
          <h1>Delete my Account</h1>
          <ParagraphText>
            Are you Sure?. If you need to delete your account permanently enter
            your username and password.
          </ParagraphText>
          <form className="form__container">
            <Input
              type={"email"}
              name={"email"}
              label={"Email"}
              onChange={onChange}
              value={values.email}
              required
            />
            <Input
              type={"password"}
              name={"password"}
              label={"Password"}
              onChange={onChange}
              value={values.password}
              required
            />
          </form>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <Button style={"outline"} onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Delete onClick={() => setDel(true)}>Delete</Delete>
          </div>
          {del && (
            <>
              <ParagraphText>Type 'DELETE' to confirm.</ParagraphText>
              <form className="form__container">
                <Input
                  type={"text"}
                  name={"delete"}
                  label={"Confirmation"}
                  value={values.delete}
                  onChange={onChange}
                  pattern={"^DELETE$"}
                  errorMessage={"type DELETE"}
                  required
                />
              </form>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                <Button style={"outline"} onClick={() => setDel(false)}>
                  Cancel
                </Button>
                <Delete onClick={handleDeleteAccount}>{loading ? 'Deleting...':'Delete'}</Delete>
              </div>
            </>
          )}
        </Modal>
      )}
      <Back title={"Delete Account"} />
      <div className="delete-wrapper">
        <div className="delete-container">
          <ParagraphText>
            Deleting your account will remove all of your information from our
            database. This cannot be undone.
          </ParagraphText>
          <Delete onClick={() => setShowModal(true)}>Delete my account</Delete>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
