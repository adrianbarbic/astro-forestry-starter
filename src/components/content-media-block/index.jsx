const ContentMediaBlock = ({content}) => (
  <>
    <h1 class="text-3xl font-bold">{content.heading}</h1>
    <div class="flex p-2 space-x-2">
      <div class="flex p-2 bg-red-400 rounded-lg">{content.text_area}</div>
      <div class="flex p-2 bg-red-400 rounded-lg">Two</div>
      <div class="flex p-2 bg-red-400 rounded-lg">Three</div>
    </div>
  </>
)

export { ContentMediaBlock };