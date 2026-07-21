
export const USER_CONSTANT = {
   initials: 'RS',
   firstName: 'Ross',
   lastName: 'Campbell',
   email_address: "rosscampbell1090@gmail.com",
   whatsapp_link: "https://wa.me/qr/OLAKNXGOQRO3B1",

   get fullName() {
      return `${this.firstName} ${this.lastName}`;
   }
}