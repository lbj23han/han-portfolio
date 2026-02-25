declare global {
  namespace JSX {
    interface IntrinsicElements {
      "my-custom-element": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
