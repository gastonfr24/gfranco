// Styles
import style from './page.module.css'


interface EmailTemplateProps {
  firstName: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message,
  email
}) => (
<>
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>New Assignment</title>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* reset */\n    article,\n    aside,\n    details,\n    figcaption,\n    figure,\n    footer,\n    header,\n    hgroup,\n    nav,\n    section,\n    summary {\n      display: block\n    }\n\n    audio,\n    canvas,\n    video {\n      display: inline-block;\n      *display: inline;\n      *zoom: 1\n    }\n\n    audio:not([controls]) {\n      display: none;\n      height: 0\n    }\n\n    [hidden] {\n      display: none\n    }\n\n    html {\n      font-size: 100%;\n      -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%\n    }\n\n    html,\n    button,\n    input,\n    select,\n    textarea {\n      font-family: sans-serif\n    }\n\n    body {\n      margin: 0\n    }\n\n    a:focus {\n      outline: thin dotted\n    }\n\n    a:active,\n    a:hover {\n      outline: 0\n    }\n\n    h1 {\n      font-size: 2em;\n      margin: 0 0.67em 0\n    }\n\n    h2 {\n      font-size: 1.5em;\n      margin: 0 0 .83em 0\n    }\n\n    h3 {\n      font-size: 1.17em;\n      margin: 1em 0\n    }\n\n    h4 {\n      font-size: 1em;\n      margin: 1.33em 0\n    }\n\n    h5 {\n      font-size: .83em;\n      margin: 1.67em 0\n    }\n\n    h6 {\n      font-size: .75em;\n      margin: 2.33em 0\n    }\n\n    abbr[title] {\n      border-bottom: 1px dotted\n    }\n\n    b,\n    strong {\n      font-weight: bold\n    }\n\n    blockquote {\n      margin: 1em 40px\n    }\n\n    dfn {\n      font-style: italic\n    }\n\n    mark {\n      background: #ff0;\n      color: #000\n    }\n\n    p,\n    pre {\n      margin: 1em 0\n    }\n\n    code,\n    kbd,\n    pre,\n    samp {\n      font-family: monospace, serif;\n      _font-family: \'courier new\', monospace;\n      font-size: 1em\n    }\n\n    pre {\n      white-space: pre;\n      white-space: pre-wrap;\n      word-wrap: break-word\n    }\n\n    q {\n      quotes: none\n    }\n\n    q:before,\n    q:after {\n      content: \'\';\n      content: none\n    }\n\n    small {\n      font-size: 75%\n    }\n\n    sub,\n    sup {\n      font-size: 75%;\n      line-height: 0;\n      position: relative;\n      vertical-align: baseline\n    }\n\n    sup {\n      top: -0.5em\n    }\n\n    sub {\n      bottom: -0.25em\n    }\n\n    dl,\n    menu,\n    ol,\n    ul {\n      margin: 1em 0\n    }\n\n    dd {\n      margin: 0 0 0 40px\n    }\n\n    menu,\n    ol,\n    ul {\n      padding: 0 0 0 40px\n    }\n\n    nav ul,\n    nav ol {\n      list-style: none;\n      list-style-image: none\n    }\n\n    img {\n      border: 0;\n      -ms-interpolation-mode: bicubic\n    }\n\n    svg:not(:root) {\n      overflow: hidden\n    }\n\n    figure {\n      margin: 0\n    }\n\n    form {\n      margin: 0\n    }\n\n    fieldset {\n      border: 1px solid #c0c0c0;\n      margin: 0 2px;\n      padding: .35em .625em .75em\n    }\n\n    legend {\n      border: 0;\n      padding: 0;\n      white-space: normal;\n      *margin-left: -7px\n    }\n\n    button,\n    input,\n    select,\n    textarea {\n      font-size: 100%;\n      margin: 0;\n      vertical-align: baseline;\n      *vertical-align: middle\n    }\n\n    button,\n    input {\n      line-height: normal\n    }\n\n    button,\n    html input[type="button"],\n    input[type="reset"],\n    input[type="submit"] {\n      -webkit-appearance: button;\n      cursor: pointer;\n      *overflow: visible\n    }\n\n    button[disabled],\n    input[disabled] {\n      cursor: default\n    }\n\n    input[type="checkbox"],\n    input[type="radio"] {\n      box-sizing: border-box;\n      padding: 0;\n      *height: 13px;\n      *width: 13px\n    }\n\n    input[type="search"] {\n      -webkit-appearance: textfield;\n      -moz-box-sizing: content-box;\n      -webkit-box-sizing: content-box;\n      box-sizing: content-box\n    }\n\n    input[type="search"]::-webkit-search-cancel-button,\n    input[type="search"]::-webkit-search-decoration {\n      -webkit-appearance: none\n    }\n\n    button::-moz-focus-inner,\n    input::-moz-focus-inner {\n      border: 0;\n      padding: 0\n    }\n\n    textarea {\n      overflow: auto;\n      vertical-align: top\n    }\n\n    table {\n      border-collapse: collapse;\n      border-spacing: 0\n    }\n\n    /* custom client-specific styles including styles for different online clients */\n    .ReadMsgBody {\n      width: 100%;\n    }\n\n    .ExternalClass {\n      width: 100%;\n    }\n\n    /* hotmail / outlook.com */\n    .ExternalClass,\n    .ExternalClass p,\n    .ExternalClass span,\n    .ExternalClass font,\n    .ExternalClass td,\n    .ExternalClass div {\n      line-height: 100%;\n    }\n\n    /* hotmail / outlook.com */\n    table,\n    td {\n      mso-table-lspace: 0pt;\n      mso-table-rspace: 0pt;\n    }\n\n    /* Outlook */\n    #outlook a {\n      padding: 0;\n    }\n\n    /* Outlook */\n    img {\n      -ms-interpolation-mode: bicubic;\n      display: block;\n      outline: none;\n      text-decoration: none;\n    }\n\n    /* IExplorer */\n    body,\n    table,\n    td,\n    p,\n    a,\n    li,\n    blockquote {\n      -ms-text-size-adjust: 100%;\n      -webkit-text-size-adjust: 100%;\n      font-weight: normal !important;\n    }\n\n    .ExternalClass td[class="ecxflexibleContainerBox"] h3 {\n      padding-top: 10px !important;\n    }\n\n    /* hotmail */\n    /* email template styles */\n    h1 {\n      display: block;\n      font-size: 26px;\n      font-style: normal;\n      font-weight: normal;\n      line-height: 100%;\n    }\n\n    h2 {\n      display: block;\n      font-size: 20px;\n      font-style: normal;\n      font-weight: normal;\n      line-height: 120%;\n    }\n\n    h3 {\n      display: block;\n      font-size: 17px;\n      font-style: normal;\n      font-weight: normal;\n      line-height: 110%;\n    }\n\n    h4 {\n      display: block;\n      font-size: 18px;\n      font-style: italic;\n      font-weight: normal;\n      line-height: 100%;\n    }\n\n    .flexibleImage {\n      height: auto;\n    }\n\n    table[class=flexibleContainerCellDivider] {\n      padding-bottom: 0 !important;\n      padding-top: 0 !important;\n    }\n\n    body,\n    #bodyTbl {\n      background-color: #E1E1E1;\n    }\n\n    #emailHeader {\n      background-color: #E1E1E1;\n    }\n\n    #emailBody {\n      background-color: #FFFFFF;\n    }\n\n    #emailFooter {\n      background-color: #E1E1E1;\n    }\n\n    .textContent {\n      color: #8B8B8B;\n      font-family: Helvetica;\n      font-size: 16px;\n      line-height: 125%;\n      text-align: Left;\n    }\n\n    .textContent a {\n      color: #205478;\n      text-decoration: underline;\n    }\n\n    .emailButton {\n      background-color: #205478;\n      border-collapse: separate;\n    }\n\n    .buttonContent {\n      color: #FFFFFF;\n      font-family: Helvetica;\n      font-size: 18px;\n      font-weight: bold;\n      line-height: 100%;\n      padding: 15px;\n      text-align: center;\n    }\n\n    .buttonContent a {\n      color: #FFFFFF;\n      display: block;\n      text-decoration: none !important;\n      border: 0 !important;\n    }\n\n    #invisibleIntroduction {\n      display: none;\n      display: none !important;\n    }\n\n    /* hide the introduction text */\n    /* other framework hacks and overrides */\n    span[class=ios-color-hack] a {\n      color: #275100 !important;\n      text-decoration: none !important;\n    }\n\n    /* Remove all link colors in IOS (below are duplicates based on the color preference) */\n    span[class=ios-color-hack2] a {\n      color: #205478 !important;\n      text-decoration: none !important;\n    }\n\n    span[class=ios-color-hack3] a {\n      color: #8B8B8B !important;\n      text-decoration: none !important;\n    }\n\n    /* phones and sms */\n    .a[href^="tel"],\n    a[href^="sms"] {\n      text-decoration: none !important;\n      color: #606060 !important;\n      pointer-events: none !important;\n      cursor: default !important;\n    }\n\n    .mobile_link a[href^="tel"],\n    .mobile_link a[href^="sms"] {\n      text-decoration: none !important;\n      color: #606060 !important;\n      pointer-events: auto !important;\n      cursor: default !important;\n    }\n\n    /* responsive styles */\n    @media only screen and (max-width: 480px) {\n      body {\n        width: 100% !important;\n        min-width: 100% !important;\n      }\n\n      table[id="emailHeader"],\n      table[id="emailBody"],\n      table[id="emailFooter"],\n      table[class="flexibleContainer"] {\n        width: 100% !important;\n      }\n\n      td[class="flexibleContainerBox"],\n      td[class="flexibleContainerBox"] table {\n        display: block;\n        width: 100%;\n        text-align: left;\n      }\n\n      td[class="imageContent"] img {\n        height: auto !important;\n        width: 100% !important;\n        max-width: 100% !important;\n      }\n\n      img[class="flexibleImage"] {\n        height: auto !important;\n        width: 100% !important;\n        max-width: 100% !important;\n      }\n\n      img[class="flexibleImageSmall"] {\n        height: auto !important;\n        width: auto !important;\n      }\n\n      table[class="flexibleContainerBoxNext"] {\n        padding-top: 10px !important;\n      }\n\n      table[class="emailButton"] {\n        width: 100% !important;\n      }\n\n      td[class="buttonContent"] {\n        padding: 0 !important;\n      }\n\n      td[class="buttonContent"] a {\n        padding: 15px !important;\n      }\n    }\n  '
    }}
  />
  <center style={{ backgroundColor: "#E1E1E1" }}>
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      id="bodyTbl"
      style={{
        tableLayout: "fixed",
        maxWidth: "100% !important",
        width: "100% !important",
        minWidth: "100% !important",
        height:"100%",
      }}
    >
      <tbody>
        <tr>
          <td align="center" valign="top" id="bodyCell">
            <table
              bgcolor="#E1E1E1"
              border={0}
              cellPadding={0}
              cellSpacing={0}
              width={500}
              id="emailHeader"
            >
              <tbody>
                <tr>
                  <td align="center" valign="top">
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td align="center" valign="top">
                            <table
                              border={0}
                              cellPadding={10}
                              cellSpacing={0}
                              width={500}
                              className="flexibleContainer"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    valign="top"
                                    width={500}
                                    className="flexibleContainerCell"
                                  >
                                    <table
                                      align="left"
                                      border={0}
                                      cellPadding={0}
                                      cellSpacing={0}
                                      width="100%"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            align="left"
                                            valign="middle"
                                            id="invisibleIntroduction"
                                            className="flexibleContainerBox"
                                            style={{
                                              display: "none !important"
                                            }}
                                          >
                                            <table
                                              border={0}
                                              cellPadding={0}
                                              cellSpacing={0}
                                              width="100%"
                                              style={{ maxWidth: "100%" }}
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="left"
                                                    className="textContent"
                                                  >
                                                    <div
                                                      style={{
                                                        fontFamily:
                                                          "Helvetica,Arial,sans-serif",
                                                        fontSize: 13,
                                                        color: "#828282",
                                                        textAlign: "center",
                                                        lineHeight: "120%"
                                                      }}
                                                    >
                                                      Here you can put short
                                                      introduction of your email
                                                      template.
                                                    </div>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              bgcolor="#FFFFFF"
              border={0}
              cellPadding={0}
              cellSpacing={0}
              width={500}
              id="emailBody"
            >
              <tbody>
                <tr>
                  <td align="center" valign="top">
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      width="100%"
                      style={{ color: "#FFFFFF" }}
                      bgcolor="#171717"
                    >
                      <tbody>
                        <tr>
                          <td align="center" valign="top">
                            <table
                              border={0}
                              cellPadding={0}
                              cellSpacing={0}
                              width={500}
                              className="flexibleContainer"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    align="center"
                                    valign="top"
                                    width={500}
                                    className="flexibleContainerCell"
                                  >
                                    <table
                                      border={0}
                                      cellPadding={30}
                                      cellSpacing={0}
                                      width="100%"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            align="center"
                                            valign="top"
                                            className="textContent"
                                          >
                                            <h1
                                              style={{
                                                color: "#FFFFFF",
                                                lineHeight: "100%",
                                                fontFamily:
                                                  "Helvetica,Arial,sans-serif",
                                                fontSize: 35,
                                                fontWeight: "normal",
                                                marginBottom: 5,
                                                textAlign: "center"
                                              }}
                                            >
                                              Cotización
                                              
                                              Página Web
                                            </h1>
                                            <h2
                                              style={{
                                                textAlign: "center",
                                                fontWeight: "normal",
                                                fontFamily:
                                                  "Helvetica,Arial,sans-serif",
                                                fontSize: 23,
                                                marginBottom: 10,
                                                color: "#A2E4FD",
                                                lineHeight: "135%"
                                              }}
                                            >
                                              
                                              cotización por página: 
                                            </h2>
                                            <div
                                              style={{
                                                textAlign: "center",
                                                fontFamily:
                                                  "Helvetica,Arial,sans-serif",
                                                fontSize: 15,
                                                marginBottom: 0,
                                                color: "#FFFFFF",
                                                lineHeight: "135%"
                                              }}
                                            >
                                              de parte de: {firstName}
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="top">
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td align="center" valign="top">
                            <table
                              border={0}
                              cellPadding={0}
                              cellSpacing={0}
                              width={500}
                              className="flexibleContainer"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    align="center"
                                    valign="top"
                                    width={500}
                                    className="flexibleContainerCell"
                                  >
                                    <table
                                      border={0}
                                      cellPadding={30}
                                      cellSpacing={0}
                                      width="100%"
                                    >
                                      <tbody>
                                        <tr>
                                          <td align="center" valign="top">
                                            <table
                                              border={0}
                                              cellPadding={0}
                                              cellSpacing={0}
                                              width="100%"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    valign="top"
                                                    className="textContent"
                                                  >
                                                    <h3
                                                      style={{
                                                        color: "#5F5F5F",
                                                        lineHeight: "125%",
                                                        fontFamily:
                                                          "Helvetica,Arial,sans-serif",
                                                        fontSize: 20,
                                                        fontWeight: "normal",
                                                        marginTop: 0,
                                                        marginBottom: 3,
                                                        textAlign: "left"
                                                      }}
                                                    >
                                                      Hola, soy {firstName}
                                                    </h3>
                                                    <div
                                                      style={{
                                                        textAlign: "left",
                                                        fontFamily:
                                                          "Helvetica,Arial,sans-serif",
                                                        fontSize: 15,
                                                        marginBottom: 0,
                                                        marginTop: 3,
                                                        color: "#5F5F5F",
                                                        lineHeight: "135%"
                                                      }}
                                                    >
                                                     {message}
                                                    </div>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="top">
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      width="100%"
                      bgcolor="#F8F8F8"
                    >
                      <tbody>
                        <tr>
                          <td align="center" valign="top">
                            <table
                              border={0}
                              cellPadding={0}
                              cellSpacing={0}
                              width={500}
                              className="flexibleContainer"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    align="center"
                                    valign="top"
                                    width={500}
                                    className="flexibleContainerCell"
                                  >
                                    <table
                                      border={0}
                                      cellPadding={30}
                                      cellSpacing={0}
                                      width="100%"
                                    >
                                      <tbody>
                                        <tr>
                                          <td align="center" valign="top">
                                            <table
                                              border={0}
                                              cellPadding={0}
                                              cellSpacing={0}
                                              width="50%"
                                              className="emailButton"
                                              style={{
                                                backgroundColor: "#171717"
                                              }}
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    valign="middle"
                                                    className="buttonContent"
                                                    style={{
                                                      paddingTop: 15,
                                                      paddingBottom: 15,
                                                      paddingRight: 15,
                                                      paddingLeft: 15
                                                    }}
                                                  >
                                                    <a
                                                      style={{
                                                        color: "#FFFFFF",
                                                        textDecoration: "none",
                                                        fontFamily:
                                                          "Helvetica,Arial,sans-serif",
                                                        fontSize: 20,
                                                        lineHeight: "135%"
                                                      }}
                                                      href="{{link}}"
                                                      target="_blank"
                                                    >
                                                      {email}
                                                    </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* footer */}
            <table
              bgcolor="#E1E1E1"
              border={0}
              cellPadding={0}
              cellSpacing={0}
              width={500}
              id="emailFooter"
            >
              <tbody>
                <tr>
                  <td align="center" valign="top">
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td align="center" valign="top">
                            <table
                              border={0}
                              cellPadding={0}
                              cellSpacing={0}
                              width={500}
                              className="flexibleContainer"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    align="center"
                                    valign="top"
                                    width={500}
                                    className="flexibleContainerCell"
                                  >
                                    <table
                                      border={0}
                                      cellPadding={30}
                                      cellSpacing={0}
                                      width="100%"
                                    >
                                      <tbody>
                                        <tr>
                                          <td valign="top" style={{backgroundColor:"#E1E1E1"}}>
                                            <div
                                              style={{
                                                fontFamily:
                                                  "Helvetica,Arial,sans-serif",
                                                fontSize: 13,
                                                color: "#828282",
                                                textAlign: "center",
                                                lineHeight: "120%"
                                              }}
                                            >
                                              <div>
                                                Copyright © 2022. All rights
                                                reserved.
                                              </div>
                                              <div>
                                                If you don't want to receive
                                                these emails from us in the
                                                future, please
                                                <a
                                                  href="https://app.omegaconstructionmanagement.com/profile"
                                                  target="_blank"
                                                  style={{
                                                    textDecoration: "none",
                                                    color: "#828282"
                                                  }}
                                                >
                                                  <span
                                                    style={{ color: "#828282" }}
                                                  >
                                                    unsubscribe
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* // end of footer */}
          </td>
        </tr>
      </tbody>
    </table>
  </center>
</>

);
