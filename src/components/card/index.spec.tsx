import { render, screen } from "@testing-library/react";

import Card from ".";

describe('Card', () => {

  it('will render title', () => {
    render(<Card title="test title" />);

    const title = screen.getByRole('heading', { name: "test title"});
    expect(title).toBeInTheDocument();
  });
});