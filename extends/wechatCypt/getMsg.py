from WXBizMsgCrypt import WXBizMsgCrypt
import xml.etree.cElementTree as ET
import sys

if __name__ == "__main__":  
    sToken              = "wYA10XSUEzL1EQmdCyXFd9hzGNsM"
    sEncodingAESKey     = "iuSFA11uMgA86sTS2ZiadHxMtQjvpk6BzUSsnSQ9NiY"
    sCorpID             = "wweeb673ca4f4dda8c"
    wxcpt               = WXBizMsgCrypt(sToken,sEncodingAESKey,sCorpID)

    sReqMsgSig          = sys.argv[1]
    sReqTimeStamp       = sys.argv[2]
    sReqNonce           = sys.argv[3]
    sToUserName         = sys.argv[4]
    sEncrypt            = sys.argv[5]
    sAgentID            = sys.argv[6]

    sReqData            = "<xml>\n<ToUserName>" + sToUserName +"</ToUserName>\n<Encrypt>" + sEncrypt + "</Encrypt>\n<AgentID>" + sAgentID + "</AgentID></xml>"
    
    ret,sMsg            = wxcpt.DecryptMsg( sReqData, sReqMsgSig, sReqTimeStamp, sReqNonce)
    if(ret!=0):
        sys.stderr.write(str(ret))
        sys.exit(1)

    sys.stdout.write(str(sMsg))
    sys.exit(0)