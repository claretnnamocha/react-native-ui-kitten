/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  FlatList,
  FlatListProps,
} from 'react-native';
import { Overwrite } from 'utility-types';
import {
  styled,
  StyledComponentProps,
} from '../../theme';

type ListStyledProps = Overwrite<StyledComponentProps, {
  appearance?: 'default' | string;
}>;

export type ListProps<ItemT = any> = FlatListProps<ItemT> & ListStyledProps;
export type ListElement<ItemT = any> = React.ReactElement<ListProps<ItemT>>;

export interface BaseScrollParams {
  animated?: boolean;
}

export interface ViewScrollParams {
  viewOffset?: number;
  viewPosition?: number;
}

export interface ScrollToIndexParams extends BaseScrollParams, ViewScrollParams {
  index: number;
}

export interface ScrollToOffsetParams extends BaseScrollParams {
  offset: number;
}

/**
 * Performant interface for rendering simple, flat lists.
 * Lists should render ListItem components by providing them through `renderItem` property
 * to provide a useful component.
 *
 * @extends React.Component
 *
 * @property {any[]} data - An array of anything to be rendered within the list
 *
 * @property {(ListRenderItemInfo<ItemT>) => ReactElement} renderItem - Takes an
 * item from *data* and renders it into the list.
 *
 * @property {FlatListProps} ...FlatListProps - Any props applied to FlatList component.
 *
 * @overview-example ListSimpleUsage
 *
 * @overview-example ListAccessories
 *
 * @example ListStyling
 * ```
 */
export class ListComponent<ItemT = any> extends React.Component<ListProps> {

  static styledComponentName: string = 'List';

  private listRef: React.RefObject<FlatList<ItemT>> = React.createRef();

  public scrollToEnd = (params?: BaseScrollParams): void => {
    this.listRef.current.scrollToEnd(params);
  };

  public scrollToIndex = (params: ScrollToIndexParams): void => {
    this.listRef.current.scrollToIndex(params);
  };

  public scrollToOffset(params: ScrollToOffsetParams): void {
    this.listRef.current.scrollToOffset(params);
  }

  private keyExtractor = (item: ItemT, index: number): string => {
    return index.toString();
  };

  public render(): React.ReactElement {
    const { eva, style, keyExtractor, ...flatListProps } = this.props;

    return (
      <FlatList
        keyExtractor={keyExtractor || this.keyExtractor}
        {...flatListProps}
        ref={this.listRef}
        style={[eva.style, style]}
      />
    );
  }
}

export const List = styled<ListProps>(ListComponent);
