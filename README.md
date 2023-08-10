# Next.js 13, daisyUI, Supabase

# Supabase

.env files needs below key, values

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

# Trouble shooting

## husky

### pnpm: command not found

> Follow one of belows

1. install pnpm globally

```bash
npm install -g pnpm
```

2. remove node_modules
   [reference](https://stackoverflow.com/questions/66246587/how-to-fix-error-not-found-husky-run-when-committing-new-code)

```bash
rm -rf node_modules
pnpm i
```

3. remove hooks
   [reference](https://stackoverflow.com/questions/66246587/how-to-fix-error-not-found-husky-run-when-committing-new-code)

```bash
rm -rf .git/hooks
npm install
```

4. config .huskyrc

```bash
touch ~/.huskyrc
open ~/.huskyrc
```

and copy this to opened file

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
