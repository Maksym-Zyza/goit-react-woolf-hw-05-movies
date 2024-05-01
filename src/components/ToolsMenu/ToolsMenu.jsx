import { useState } from 'react';
import st from './ToolsMenu.module.scss';
import { ReactComponent as ToolDots } from '../../components/Icons/DotsMenu.svg';
import { ReactComponent as ArrowRight } from '../../components/Icons/ArrowRight.svg';
import { text } from '../../helpers/text';

export default function ToolsMenu({ changeSelect }) {
  const [showing, setShowing] = useState(false);

  const toggleTools = () => {
    !showing
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
    setShowing(!showing);
  };

  const changeChange = event => {
    changeSelect(event);
    toggleTools();
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      toggleTools();
    }
  };

  return (
    <div>
      <ToolDots className={st.toolDots} onClick={toggleTools} />

      {showing && (
        <div className={st.toolBarWrapper} onClick={handleBackdropClick}>
          <div className={st.toolBar}>
            <ul>
              <li onClick={changeChange} data-value={'day'}>
                <ArrowRight />
                {text.Day}
              </li>
              <li onClick={changeChange} data-value={'week'}>
                <ArrowRight />
                {text.Week}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
