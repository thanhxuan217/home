---
title: "Prompt Engineering thuc chien: viet prompt ro rang, dung muc tieu"
date: "2026-03-21"
author: "Huynh Thanh Xuan"
topic: "Prompt Engineering"
tags: ["prompt-engineering", "llm", "evaluation", "workflow"]
status: "draft"
summary: "Huong dan viet prompt thuc chien de tang do on dinh va kha nang tai su dung trong san pham."
---

## Why this topic matters

Prompt la giao dien truc tiep giua con nguoi va LLM. Prompt tot giup giam hallucination, tiet kiem token va de bao tri.

## Core idea

Mot prompt hieu qua thuong co 4 thanh phan: vai tro, muc tieu, rang buoc, dinh dang output. Cang cu the, model cang de tra loi dung huong.

## Step-by-step breakdown

1. Mo ta ro vai tro va task cua model.
2. Dat quy tac output (schema, do dai, ngon ngu).
3. Them vi du mau va test voi nhieu tinh huong.

## Example

Prompt tom tat ticket support:
"Ban la tro ly CS. Tom tat van de trong 3 gach dau dong, neu thieu thong tin thi danh dau Can bo sung."

## Common mistakes

- Prompt dai nhung mo ho.
- Khong khoa dinh output format.
- Khong co bo test hoi quy sau moi lan sua.

## Key takeaways

- Prompt engineering la cong viec thiet ke he thong, khong chi la viet cau lenh.
- Nen quan ly prompt nhu code: version, test, review.
- Ket hop prompt + eval moi cho ket qua on dinh.

## References

- OpenAI prompting guide
- Prompt patterns for LLM apps
