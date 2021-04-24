<table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tbody>
        @foreach ($list as $row)
            <tr>
                <td>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" class="table-inside">
                        <thead>
                            <tr>
                                <th colspan="2" align="left">{!! $row['heading'] !!}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($row['list'] as $listRow)
                                <tr>
                                    <td width="50%">
                                        <label>{!! $listRow['name'] !!}</label>
                                    </td>
                                    <td width="50%">{!! $listRow['value'] !!}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
