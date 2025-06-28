export GTJA_HOME="$HOME/Nextcloud/国泰君安"
export PATH="$GTJA_HOME/工作/scripts:$PATH"

# pnpm global lib (useful for `pnpm link`)
export PNPM_HOME="/Users/jasonj/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
