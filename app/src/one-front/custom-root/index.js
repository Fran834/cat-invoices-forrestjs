// Import the custom logic written in React
import { CustomRoot } from './CustomRoot';

// Explain how to integrate our custom logic
// with the rest of the App:
export const customRoot = ({ registerAction }) => {
  registerAction({
    hook: '$REACT_ROOT_COMPONENT',
    handler: { component: CustomRoot },
  });
};