function EditScoreIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <defs>
        <rect id="b" width="442" height="493" x="18" y="17" rx="5" />
        <filter
          id="a"
          width="103.2%"
          height="102.8%"
          x="-1.6%"
          y="-1%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="2"
          />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
          />
        </filter>
        <path id="c" d="M0 .066h17.932v17.677H0z" />
        <path id="e" d="M0 17.934h17.932V.257H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="#F3F3F3" d="M-418-209H950v775H-418z" opacity=".2" />
        <g transform="translate(-416 -209)">
          <use fill="#000" filter="url(#a)" xlinkHref="#b" />
          <use fill="#FFF" fillOpacity="0" xlinkHref="#b" />
        </g>
        <text
          fill="#FF5A5A"
          fontFamily="Prompt-SemiBold, Prompt"
          fontSize="16"
          fontWeight="500"
          transform="translate(-375 -8)"
        >
          <tspan x="0" y="26">
            รอบที่ 4 : Admission
          </tspan>
        </text>
        <g transform="translate(-92 -8)">
          <rect
            width="119"
            height="34"
            x=".5"
            y=".5"
            stroke="#FF5A5A"
            rx="17"
          />
          <g transform="translate(92 8)">
            <g transform="translate(0 .19)">
              <mask id="d" fill="#fff">
                <use xlinkHref="#c" />
              </mask>
              <path
                fill="#FF5A5A"
                d="M9.41 16.855V9.342h7.622c-.223 4.044-3.52 7.294-7.622 7.513M.9 9.342h7.623v7.513c-4.102-.22-7.4-3.47-7.623-7.513M8.523.954v7.513H.9C1.123 4.424 4.42 1.174 8.523.954m8.51 7.513H9.41V.954c4.102.22 7.399 3.47 7.622 7.513M8.966.067C4.022.066 0 4.03 0 8.904c0 4.873 4.022 8.838 8.966 8.838 4.944 0 8.967-3.965 8.967-8.838 0-4.874-4.023-8.839-8.967-8.839"
                mask="url(#d)"
              />
            </g>
            <mask id="f" fill="#fff">
              <use xlinkHref="#e" />
            </mask>
            <path
              fill="#FF5A5A"
              d="M10.73 13.064h3.665v-.875H10.73zM3.556 13.064H7.22v-.875H3.556zM4.945 7.74h.887V6.374H7.22v-.875H5.832V4.129h-.887v1.369H3.556v.875h1.389zM10.953 6.902l.628.62.982-.969.981.968.628-.619-.982-.967.982-.967-.628-.62-.981.969-.982-.968-.628.619.982.967zM12.563 11.842a.617.617 0 0 0 .62-.612.617.617 0 0 0-.62-.612.617.617 0 0 0-.622.612c0 .339.279.612.622.612M12.563 13.411a.617.617 0 0 0-.622.613c0 .338.279.612.622.612a.617.617 0 0 0 .62-.612.617.617 0 0 0-.62-.613"
              mask="url(#f)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default EditScoreIcon;
