export default function QRCode() {
  return (
    <div class="bg-white rounded-2xl flex flex-col p-4 desktop:p-4 w-full mx-4 desktop:w-[320px] desktop:h-[500px] gap-6 shadow-lg">
      <img src="/image-qr-code.png" class="rounded-lg w-full" />
      <div class="flex flex-col gap-3 pb-6">
        <p class="font-bold text-center text-xl desktop:text-[22px] text-dark-blue desktop:leading-7 px-2 desktop:px-4">
          Improve your front-end skills by building projects
        </p>
        <p class="text-center text-[14px] desktop:text-[15px] text-grayish-blue leading-[18px] desktop:leading-[19px] px-4 desktop:px-3">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}