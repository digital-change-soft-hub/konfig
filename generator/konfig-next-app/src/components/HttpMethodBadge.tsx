import {
  Badge,
  MantineColor,
  MantineSize,
  useMantineTheme,
} from '@mantine/core'
import type { HttpMethods } from 'konfig-lib'
import { HttpMethodsEnum } from 'konfig-lib/dist/forEachOperation'

export function HttpMethodBadge({
  httpMethod,
  size,
}: {
  httpMethod: HttpMethods
  size?: MantineSize
}) {
  const theme = useMantineTheme()
  return (
    <Badge
      size={size}
      variant={theme.colorScheme === 'light' ? 'filled' : 'light'}
      color={httpMethodColor(httpMethod)}
      radius="xs"
    >
      {httpMethod}
    </Badge>
  )
}

function httpMethodColor(method: HttpMethods): MantineColor {
  if (method === HttpMethodsEnum.GET) return 'green'
  if (method === HttpMethodsEnum.POST) return 'blue'
  if (method === HttpMethodsEnum.PUT) return 'blue'
  if (method === HttpMethodsEnum.DELETE) return 'red'
  if (method === HttpMethodsEnum.PATCH) return 'yellow'
  if (method === HttpMethodsEnum.OPTIONS) return 'yellow'
  if (method === HttpMethodsEnum.TRACE) return 'yellow'
  return 'gray'
}