from WXBizMsgCrypt import WXBizMsgCrypt
import xml.etree.cElementTree as ET
import sys

if __name__ == "__main__":  
    sToken              = "wYA10XSUEzL1EQmdCyXFd9hzGNsM"
    sEncodingAESKey     = "iuSFA11uMgA86sTS2ZiadHxMtQjvpk6BzUSsnSQ9NiY"
    sCorpID             = "wweeb673ca4f4dda8c"
    wxcpt               = WXBizMsgCrypt(sToken,sEncodingAESKey,sCorpID)

    sToUserName         = sys.argv[1]
    sFromUserName       = sys.argv[2]
    sCreateTime         = sys.argv[3]
    sMsgType            = sys.argv[4]
    sContent            = sys.argv[5]
    sMsgId              = sys.argv[6]
    sAgentID            = sys.argv[7]

    sReqData            = "<xml>\n<ToUserName>" + sToUserName     +"</ToUserName>\n"
    sReqData           += "<FromUserName>"      + sFromUserName   + "</FromUserName>\n"
    sReqData           += "<CreateTime>"        + sCreateTime     + "</CreateTime>\n"
    sReqData           += "<MsgType>"           + sMsgType        + "</MsgType>\n"
    sReqData           += "<Content>"           + sContent        + "</Content>\n"
    sReqData           += "<MsgId>"             + sMsgId          + "</MsgId>\n"
    sReqData           += "<AgentID>"           + sAgentID        + "</AgentID></xml>"
    
    ret,sEncryptMsg=wxcpt.EncryptMsg(sRespData, sReqNonce, sReqTimeStamp)
    if(ret!=0):
        sys.stderr.write(str(ret))
        sys.exit(1)

    sys.stdout.write(str(sMsg))
    sys.exit(0)