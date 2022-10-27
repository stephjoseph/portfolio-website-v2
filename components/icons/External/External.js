const IconExternal = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      viewBox='0 0 24 24'
      fill='none'
      stroke='#CCD6F6'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      width='24'
      height='24'
      className='transition-colors ease-in group-hover:stroke-aquamarine group-active:stroke-aquamarine'
    >
      <title>External Link</title>
      <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
      <polyline points='15 3 21 3 21 9'></polyline>
      <line x1='10' y1='14' x2='21' y2='3'></line>
    </svg>
  );
};

export default IconExternal;
