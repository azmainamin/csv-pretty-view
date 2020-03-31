import React from "react";
import { shallow } from "enzyme";
import Button from "@material-ui/core/Button";
import UploadButton from "./UploadButton";

const defaultProps = {
  handleClick: jest.fn(),
  disabled: false,
  children: <div>child</div>
};

function render(props = defaultProps) {
  return shallow(<UploadButton {...props} />);
}

test("renders a MUIButton", () => {
  const rendered = render();
  const button = rendered.find(Button);

  expect(button.length).toBe(1);
});

test("renders a disabled button when disabled prop is passed", () => {
  const props = {
    handleClick: jest.fn(),
    disabled: true,
    children: <div>child</div>
  };
  const rendered = render(props);
  const button = rendered.find(Button);

  expect(button.prop('disabled')).toBe(true);
});
