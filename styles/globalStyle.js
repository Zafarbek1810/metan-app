import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  .rc-pagination {
    text-align: center;
    width: 80%;
    margin: auto;
    padding: 0;
    font-size: 0.875rem;
    margin-top: 30px;
    ul,
    ol {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    &::after {
      display: block;
      clear: both;
      height: 0;
      overflow: hidden;
      visibility: hidden;
      content: ' ';
    }

    &-total-text {
      display: inline-block;
      height: 28px;
      margin-right: 8px;
      line-height: 26px;
      vertical-align: middle;
    }

    &-item {
      display: inline-block;
      min-width: 28px;
      height: 28px;
      margin-right: 8px;
      font-family: Arial;
      line-height: 26px;
      text-align: center;
      vertical-align: middle;
      list-style: none;
      background-color: #fff;
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      outline: 0;
      cursor: pointer;
      user-select: none;

      a {
        display: block;
        padding: 0 6px;
        color: rgba(0, 0, 0, 0.85);
        transition: none;

        &:hover {
          text-decoration: none;
        }
      }

      &:focus,
      &:hover {
        border-color: #1890ff;
        transition: all 0.3s;

        a {
          color: #1890ff;
        }
      }

      &-active {
        font-weight: 500;
        background: #fff;
        border-color: #1890ff;

        a {
          color: #1890ff;
        }

        &:focus,
        &:hover {
          border-color: #40a9ff;
        }

        &:focus a,
        &:hover a {
          color: #40a9ff;
        }
      }
    }

    &-jump-prev,
    &-jump-next {
      outline: 0;

      button {
        background: transparent;
        border: none;
        cursor: pointer;
        color: #666;
      }

      button:after {
        display: block;
        content: '•••';
      }
    }

    &-prev,
    &-jump-prev,
    &-jump-next {
      margin-right: 8px;
    }

    &-prev,
    &-next,
    &-jump-prev,
    &-jump-next {
      display: inline-block;
      min-width: 28px;
      height: 28px;
      color: rgba(0, 0, 0, 0.85);
      font-family: Arial;
      line-height: 28px;
      text-align: center;
      vertical-align: middle;
      list-style: none;
      border-radius: 2px;
      cursor: pointer;
      transition: all 0.3s;
    }

    &-prev,
    &-next {
      outline: 0;

      button {
        color: rgba(0, 0, 0, 0.85);
        cursor: pointer;
        user-select: none;
      }

      &:hover button {
        border-color: #40a9ff;
      }

      .rc-pagination-item-link {
        display: block;
        width: 100%;
        height: 100%;
        font-size: 0.75rem;
        text-align: center;
        background-color: #fff;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        outline: none;
        transition: all 0.3s;
      }

      &:focus .rc-pagination-item-link,
      &:hover .rc-pagination-item-link {
        color: #1890ff;
        border-color: #1890ff;
      }
    }

    &-prev button:after {
      content: '‹';
      display: block;
    }

    &-next button:after {
      content: '›';
      display: block;
    }

    &-disabled {
      &,
      &:hover,
      &:focus {
        cursor: not-allowed;

        .rc-pagination-item-link {
          color: fade(#000, 25%);
          border-color: #d9d9d9;
          cursor: not-allowed;
        }
      }
    }

    &-slash {
      margin: 0 10px 0 5px;
    }

    &-options {
      display: inline-block;
      margin-left: 16px;
      vertical-align: middle;

      // IE11 css hack. \`*::-ms-backdrop,\` is a must have
      @media all and (-ms-high-contrast: none) {
        *::-ms-backdrop,
        & {
          vertical-align: top;
        }
      }

      &-size-changer.rc-select {
        display: inline-block;
        width: auto;
        margin-right: 8px;
      }

      &-quick-jumper {
        display: inline-block;
        height: 28px;
        line-height: 28px;
        vertical-align: top;

        input {
          width: 50px;
          margin: 0 8px;
        }
      }
    }

    &-simple &-prev,
    &-simple &-next {
      height: 24px;
      line-height: 24px;
      vertical-align: top;

      .rc-pagination-item-link {
        height: 24px;
        background-color: transparent;
        border: 0;

        &::after {
          height: 24px;
          line-height: 24px;
        }
      }
    }

    &-simple &-simple-pager {
      display: inline-block;
      height: 24px;
      margin-right: 8px;

      input {
        box-sizing: border-box;
        height: 100%;
        margin-right: 8px;
        padding: 0 6px;
        text-align: center;
        background-color: #fff;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        outline: none;
        transition: border-color 0.3s;

        &:hover {
          border-color: #1890ff;
        }
      }
    }

    // ============================ Disabled ============================
    &&-disabled {
      cursor: not-allowed;

      .rc-pagination-item {
        background: hsv(0, 0, 96%);
        border-color: #d9d9d9;
        cursor: not-allowed;

        a {
          color: fade(#000, 25%);
          background: transparent;
          border: none;
          cursor: not-allowed;
        }

        &-active {
          background: #fff;
          border-color: transparent;

          a {
            color: #fff;
          }
        }
      }

      .rc-pagination-item-link {
        color: fade(#000, 25%);
        background: hsv(0, 0, 96%);
        border-color: #d9d9d9;
        cursor: not-allowed;
      }

      .rc-pagination-item-link-icon {
        opacity: 0;
      }

      .rc-pagination-item-ellipsis {
        opacity: 1;
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .rc-pagination-item {
      &-after-jump-prev,
      &-before-jump-next {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .rc-pagination-options {
      display: none;
    }
  }
  
`

export {GlobalStyle}