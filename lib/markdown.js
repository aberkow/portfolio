// the remark package can be used with import
import remark from 'remark'

export const markdownToHTML = async (fileContents) => {
  // some remark plugins need to be required instead of imported
  const markdown = await remark()
    .use(require('remark-html'))
    .use(require('remark-prism'))
    .process(fileContents || '')
    
  return markdown.contents.toString()
}

