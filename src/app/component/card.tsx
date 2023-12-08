const question =
  'De combien de degrés à augmenter la planète depuis les années 1850';

export default function Card() {
  return (
    <div className="bg-dark-gray w-min h-min py-8 px-5 drop-shadow-2xl leading-normal text-white min-w-[325px] flex flex-col justify-center items-center rounded-xl gap-[100px]">
      <p className="text-3xl font-semibold py-8">Question</p>
      <p className="text-xl font-semibold py-8 text-center">{question}</p>
    </div>
  );
}
