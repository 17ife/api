# -*- coding: utf-8 -*-

from WXBizMsgCrypt import WXBizMsgCrypt
import xml.etree.cElementTree as ET
import sys

if __name__ == "__main__":  
    sToken              = "wYA10XSUEzL1EQmdCyXFd9hzGNsM"
    sEncodingAESKey     = "iuSFA11uMgA86sTS2ZiadHxMtQjvpk6BzUSsnSQ9NiY"
    sCorpID             = "wweeb673ca4f4dda8c"
    wxcpt               = WXBizMsgCrypt(sToken,sEncodingAESKey,sCorpID)
    sVerifyMsgSig       = sys.argv[1]
    sVerifyTimeStamp    = sys.argv[2]
    sVerifyNonce        = sys.argv[3]
    sVerifyEchoStr      = sys.argv[4]
    ret,sEchoStr        = wxcpt.VerifyURL(sVerifyMsgSig, sVerifyTimeStamp,sVerifyNonce,sVerifyEchoStr)
    if(ret!=0):
        # print "ERR: VerifyURL ret: " + str(ret)
        sys.stderr.write(str(ret))
        sys.exit(1)

    sys.stdout.write(str(sEchoStr))
    sys.exit(0)
    # print sEchoStr
    # return sEchoStr
