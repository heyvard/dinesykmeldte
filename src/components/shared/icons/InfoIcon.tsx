import React, { SVGProps } from 'react'

function InfoIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g id="information">
                <path
                    id="light blue circle"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.38226 0 0 5.38226 0 12C0 18.6177 5.38226 24 12 24C18.6167 24 24 18.6177 24 12C24 5.38226 18.6167 0 12 0Z"
                    fill="#368DA8"
                />
                <path
                    id="i"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.5653 6.56522C13.5653 5.70122 12.8625 5 12.0001 5C11.1345 5 10.4348 5.70122 10.4348 6.56522C10.4348 7.43078 11.1345 8.13043 12.0001 8.13043C12.8625 8.13043 13.5653 7.43078 13.5653 6.56522ZM16.0192 18.0005C16.0192 17.4403 15.5395 17.0092 14.9757 17.0092H13.0777V11.003C13.0777 10.4428 12.598 10.0117 12.0342 10.0117H10.0049C9.44027 10.0117 8.9614 10.4427 8.9614 11.003C8.9614 11.5633 9.44027 11.9943 10.0049 11.9943H10.9907V17.0092H9.39138C8.82677 17.0092 8.3479 17.4402 8.3479 18.0005C8.3479 18.5608 8.82677 18.9918 9.39138 18.9918H14.9757C15.5395 18.9918 16.0192 18.5607 16.0192 18.0005Z"
                    fill="white"
                />
            </g>
        </svg>
    )
}

export default InfoIcon
