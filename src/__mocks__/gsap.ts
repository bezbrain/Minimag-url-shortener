const gsap = {
  registerPlugin: jest.fn(), // Mocking the registerPlugin method
};

const TextPlugin = {
  fromTo: jest.fn(), // Mocking a method "fromTo" of TextPlugin
};

const CopyToClipboard = {
  CopyToClipboard: jest.fn(),
};

export default gsap;

export { TextPlugin, CopyToClipboard };
