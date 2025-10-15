export type Group = "good" | "bad";
export type Item = { id: string; label: string; score: number; group: Group };

export const ITEMS: Item[] = [
  { id: "salad",      label: "葉物サラダ（レタス・ほうれん草など）", score: +5, group: "good" },
  { id: "veggie",     label: "彩り野菜（蒸し/焼き）",                 score: +4, group: "good" },
  { id: "fish",       label: "青魚（サバ・サンマ）",                   score: +4, group: "good" },
  { id: "soy",        label: "大豆製品（納豆・豆腐）",                 score: +3, group: "good" },
  { id: "ferment",    label: "発酵食品（ヨーグルト・キムチ）",         score: +2, group: "good" },
  { id: "mush-sea",   label: "きのこ ＆ 海藻",                         score: +2, group: "good" },
  { id: "wholegrain", label: "全粒穀物・玄米",                         score: +2, group: "good" },
  { id: "chicken",    label: "鶏むね/ささみ",                          score: +2, group: "good" },
  { id: "nuts",       label: "ナッツ（無塩ひとつかみ）",               score: +2, group: "good" },
  { id: "fruits",     label: "フルーツ（ベリー/柑橘）",                score: +2, group: "good" },
  { id: "oatmeal",    label: "オートミール",                           score: +3, group: "good" },
  { id: "water",      label: "無糖のお茶・水（500ml）",                 score: +1, group: "good" },
  { id: "soda",       label: "砂糖入りドリンク",                       score: -5, group: "bad" },
  { id: "sweets",     label: "スイーツ・菓子",                         score: -4, group: "bad" },
  { id: "fried",      label: "揚げ物",                                 score: -4, group: "bad" },
  { id: "fastfood",   label: "ファストフード",                         score: -4, group: "bad" },
  { id: "processed",  label: "加工肉（ベーコン/ソーセージ）",          score: -3, group: "bad" },
  { id: "redmeat",    label: "赤身肉の食べ過ぎ",                       score: -3, group: "bad" },
  { id: "cheese",     label: "チーズの食べ過ぎ",                        score: -2, group: "bad" },
  { id: "late",       label: "夜遅い食事",                             score: -3, group: "bad" },
  { id: "largeout",   label: "外食の大盛り",                           score: -3, group: "bad" },
  { id: "alcohol2",   label: "お酒（2杯以上/日）",                      score: -3, group: "bad" },
];


export const SCORE_BY_ID: Record<string, number> =
  Object.fromEntries(ITEMS.map(i => [i.id, i.score]));
