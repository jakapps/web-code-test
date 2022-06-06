import { render, screen } from "@testing-library/react";

import Card from ".";

describe('Card', () => {

  it('will render title', () => {
    render(<Card title="test title" body="test body" />);

    const title = screen.getByRole('heading', { name: "test title"});
    expect(title).toBeInTheDocument();
  });

  it('will render body', () => {

    render(<Card title="test title" body="test body" />);

    const body = screen.getByText("test body");
    expect(body).toBeInTheDocument();
  });

  it('will render arrow icon', () => {

    render(<Card title="test title" body="test body" />);

    const icon = screen.getByLabelText("arrow-icon");
    expect(icon).toBeInTheDocument();
  });
});