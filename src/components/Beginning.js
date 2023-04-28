import { Text, Box, Link, Button } from '@chakra-ui/react'

const Beginning = () => {
  return (
    <div>
      <Text>We take beginners on a quarterly basis.</Text>
      <Box mt='1rem' display='flex' flexDirection='column' gap={2}>
        <Link href='https://web2.myvscloud.com/wbwsc/wakentwt.wsc/iteminfo.html?Module=AR&FMID=5833192' isExternal>
          <Button color='black'>
            Youth (7-14)
          </Button>
        </Link>
        <Link href='https://web2.myvscloud.com/wbwsc/wakentwt.wsc/iteminfo.html?Module=AR&FMID=5835155' isExternal>
          <Button color='black'>
            Adult (15+)
          </Button>
        </Link>
      </Box>
    </div>
  )
}

export default Beginning