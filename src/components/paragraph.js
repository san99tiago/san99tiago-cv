import styled from '@emotion/styled'

const Paragraph = styled.p`
  text-align: justify;
  text-indent: 1em;
  hyphens: auto;

  /* Style links inside paragraphs */
  a {
    color: #4fd1c5;
    text-decoration: none;
    &:hover {
      color: #38b2ac;
      text-decoration: underline;
    }
  }
`

export default Paragraph
