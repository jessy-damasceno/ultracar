import { FC } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { IClient } from "../interfaces/IUser";

interface QrCodeProps {
  client: IClient
}

const QrCode: FC<QrCodeProps> = ({ client }) => {

  console.log(client);
  
  return <QRCodeCanvas value={JSON.stringify(client)} />;
}

export default QrCode;