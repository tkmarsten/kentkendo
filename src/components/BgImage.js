import { Box } from '@chakra-ui/react'

const BgImage = ({ children, image }) => {
  const style = {
    backgroundImage: `url("img/${image}")`,
  }

  return (
    <Box className='bg-image' style={style}>
      {children}
    </Box>
  )
}

export default BgImage