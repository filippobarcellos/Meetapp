import React from "react";
import { MdAdd } from "react-icons/md";

import DashBoardLayout from "../_layouts/dashboard";

import { Form, Button } from "./styles";

export default function Profile() {
  return (
    <DashBoardLayout>
      <Form>
        <input type="text" value="Filippo Barcellos" />
        <input type="text" value="barcellos.filippo@gmail.com" />
        <hr />
        <input type="password" placeholder="Your password" />
        <input type="password" placeholder="New password" />
        <input type="password" placeholder="Confirm new password" />
      </Form>
      <Button className="danger">
        <MdAdd size={16} /> Save Profile
      </Button>
    </DashBoardLayout>
  );
}
