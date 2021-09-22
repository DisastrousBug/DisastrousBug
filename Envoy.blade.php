@servers(['web' => 'art@188.225.44.188'])

@task('deploy')
    cd /var/www/disastrousbug.com
    git pull origin master
@endtask
