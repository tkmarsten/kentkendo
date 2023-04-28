import { Text, Box, Link, Button } from '@chakra-ui/react'

const Advanced = () => {
  return (
    <div>
      <Text>For all that have progressed to wearing armor.</Text>
      <Box mt='1rem' display='flex' flexDirection='column' gap={2}>
        <Link href='https://web2.myvscloud.com/wbwsc/wakentwt.wsc/iteminfo.html?Module=AR&FMID=5833316' isExternal>
          <Button color='black'>
            Youth (7-14)
          </Button>
        </Link>
        <Link href='https://web2.myvscloud.com/wbwsc/wakentwt.wsc/iteminfo.html?Module=AR&FMID=5835235' isExternal>
          <Button color='black'>
            Adult (15+)
          </Button>
        </Link>
      </Box>
    </div>
  )
}

export default Advanced