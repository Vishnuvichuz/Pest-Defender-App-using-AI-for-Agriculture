// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;
type IconSymbolName = keyof typeof MAPPING;


const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'exclamationmark.triangle.fill': 'warning',
  'info.circle.fill': 'info',
  'plus.circle.fill': 'add-circle',
  'camera.viewfinder': 'camera-alt',
  'leaf.fill': 'eco',
  'chart.pie.fill': 'pie-chart',
  'dollarsign.circle.fill': 'monetization-on',
  'sparkles': 'auto-awesome',
  'map.fill': 'map',
  'bell.fill': 'notifications',
  'rectangle.portrait.and.arrow.right': 'logout',
  'person.fill': 'person',
} as IconMapping;


export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
