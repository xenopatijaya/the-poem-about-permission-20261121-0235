// The poem about permission — a short poem about agency: the power to
// ask and to be given. Writes the poem to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set). Node 22, stdlib only,
// no network, deterministic: the same poem on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `The Chalk
Mid-sentence I stopped, chalk dust on my fingers,
and held it out to the quiet girl in the second row.
She took it, and the board, which had been mine,
became a question she could answer in her own hand.
I had taught her the sums. She taught me the asking.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
