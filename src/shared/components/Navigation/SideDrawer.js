import { createPortal } from 'react-dom';

import './SideDrawer.css';
import { CSSTransition } from 'react-transition-group';

function SideDrawer({ show, onClick, children }) {
  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames='slide-in-left'
      mountOnEnter
      unmountOnExit
    >
      <aside className='side-drawer' onClick={onClick}>
        {children}
      </aside>
    </CSSTransition>
  );

  return createPortal(content, document.getElementById('drawer-hook'));
}

export default SideDrawer;
