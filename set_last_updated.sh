NOW=`date -r 1332468005 '+%Y-%m-%d %T'`
sed "s/FOO/$NOW/" index.html > foo
mv foo index.html