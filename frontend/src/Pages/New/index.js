import React from "react";
import { MdAdd } from "react-icons/md";

import DashBoardLayout from "../_layouts/dashboard";
import { MdCameraEnhance } from "react-icons/md";

import { Form, Button, InputWrapper } from "./styles";

export default function New() {
  return (
    <DashBoardLayout>
      <Form>
        <InputWrapper>
          <button>
            <input type="file" />
            <div>
              <MdCameraEnhance size={80} />
            </div>
            Select Image
          </button>
        </InputWrapper>
        <input type="text" placeholder="Meetup Title" />
        <textarea type="text" placeholder="Description" />
        <input type="date" placeholder="Date" />
        <input type="text" placeholder="Local" />
      </Form>
      <Button className="danger">
        <MdAdd size={16} /> Add Meetup
      </Button>
    </DashBoardLayout>
  );
}
